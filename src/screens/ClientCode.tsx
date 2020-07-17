import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Text, useTheme, Colors} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {StackScreenProps} from '@react-navigation/stack';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {observer} from 'mobx-react-lite';

import {Madlogic} from '../assets/images';
import NavigatorMap from '../navigations/NavigatorMap';
import {AuthStackParamsList} from '../navigations/types';
import {RegistrationType} from '../core/const';
import {getTernantSetting} from '../core/api';
import {useStores} from '../core/hooks/useStores';
import {useGlobalStyles} from '../core/hooks/useGlobalStyle';
import TextInputFormik from '../components/Form/TextInput';
import CheckboxFormik from '../components/Form/Checkbox';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  input: {
    marginTop: 8,
    marginBottom: 8,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  privacyTxt: {
    color: Colors.blue500,
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    width: '50%',
    color: Colors.white,
  },
});

type ClientCodeScreenNavigationProps = StackScreenProps<
  AuthStackParamsList,
  NavigatorMap.ClientCode
>;

type ClientCodeFormValue = {
  clientCode: string;
  privacy: boolean;
};

const ClientCodeSchema = Yup.object().shape({
  clientCode: Yup.string().required('clientcode.errors.code.required'),
});

function ClientCode({navigation}: ClientCodeScreenNavigationProps) {
  const theme = useTheme();
  const store = useStores();
  const [globalStyles] = useGlobalStyles(theme);
  const {formatMessage} = useIntl();

  const handleSubmitClientCode = async ({clientCode}: ClientCodeFormValue) => {
    try {
      const setting = await getTernantSetting(clientCode);
      store?.ternantStore.loadTernantTabSetting(setting);
      navigation.navigate(NavigatorMap.Login, {
        registrationType:
          store?.ternantStore.registration?.registrationType ||
          RegistrationType.EMAIL,
      });
    } catch (error) {
      store?.snackStore.setError('clientcode.error.notfound');
    }
  };

  const handlePressPolicy = () => navigation.navigate(NavigatorMap.Privacy);

  return (
    <View style={globalStyles.container}>
      <View style={styles.imageContainer}>
        <Madlogic width={500} height={100} />
      </View>
      <Formik
        initialValues={{
          clientCode: '',
          privacy: false,
        }}
        validationSchema={ClientCodeSchema}
        onSubmit={handleSubmitClientCode}>
        {({handleSubmit, isValid}) => (
          <>
            <View style={styles.content}>
              <Text>{formatMessage({id: 'clientcode.instruction'})}</Text>
              <TextInputFormik
                name="clientCode"
                style={styles.input}
                label={formatMessage({id: 'clientcode.title'})}
                mode="outlined"
              />
              <View style={styles.checkbox}>
                <CheckboxFormik name="privacy" />
                <Text>{formatMessage({id: 'clientcode.agree'})}</Text>
                <TouchableOpacity onPress={handlePressPolicy}>
                  <Text style={styles.privacyTxt}>
                    {formatMessage({id: 'clientcode.policy'})}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <Button
                onPress={handleSubmit}
                mode="contained"
                disabled={!isValid}
                uppercase={false}
                color={Colors.red500}
                style={styles.next}>
                {formatMessage({id: 'clientcode.next'})}
              </Button>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

export default observer(ClientCode);
