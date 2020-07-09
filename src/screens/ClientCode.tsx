import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  TextInput,
  Button,
  Text,
  Checkbox,
  useTheme,
  Colors,
} from 'react-native-paper';
import {useIntl} from 'react-intl';
import {StackScreenProps} from '@react-navigation/stack';
import {useFormik} from 'formik';
import noop from 'lodash/noop';
import * as Yup from 'yup';

import {Madlogic} from '../assets/images';
import NavigatorMap from '../navigations/NavigatorMap';
import {AuthStackParamsList} from '../navigations/types';
import {RegistrationType} from '../core/const';
import {observer} from 'mobx-react-lite';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
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
  const {formatMessage} = useIntl();

  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    values: {clientCode, privacy},
    errors,
  } = useFormik<ClientCodeFormValue>({
    initialValues: {
      clientCode: '',
      privacy: false,
    },
    initialErrors: {
      clientCode: 'clientcode.errors.code.required',
    },
    validationSchema: ClientCodeSchema,
    onSubmit: (values) => {
      // TODO: fetch ternant data here
      console.log(values);
      navigation.navigate(NavigatorMap.Login, {
        registrationType: RegistrationType.ACCOUNT,
      });
    },
  });

  const toggleAgreeWithPolicy = () => setFieldValue('privacy', !privacy);

  const handlePressPolicy = () => {
    navigation.navigate(NavigatorMap.Privacy);
  };

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={styles.imageContainer}>
        <Madlogic width={500} height={100} />
      </View>
      <View style={styles.content}>
        <Text>{formatMessage({id: 'clientcode.instruction'})}</Text>
        <TextInput
          style={styles.input}
          label="Client Code"
          value={clientCode}
          onChangeText={handleChange('clientCode') || noop}
          mode="outlined"
        />
        <View style={styles.checkbox}>
          <Checkbox.Android
            status={privacy ? 'checked' : 'unchecked'}
            onPress={toggleAgreeWithPolicy}
          />
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
          disabled={!privacy || Boolean(errors.clientCode)}
          uppercase={false}
          color={Colors.red500}
          style={styles.next}>
          {formatMessage({id: 'clientcode.next'})}
        </Button>
      </View>
    </View>
  );
}

export default observer(ClientCode);
