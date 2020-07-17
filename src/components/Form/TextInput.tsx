import React from 'react';
import {TextInputProperties} from 'react-native';
import {TextInput, Text, useTheme} from 'react-native-paper';
import {useField} from 'formik';
import {useIntl} from 'react-intl';

import {useGlobalStyles} from '../../core/hooks/useGlobalStyle';

interface ITextInputFormik extends TextInputProperties {
  name: string;
  label: string;
  mode: 'outlined' | 'flat';
}

export default function TextInputFormik(props: ITextInputFormik) {
  const [field, meta, helper] = useField(props.name);
  const {formatMessage} = useIntl();
  const theme = useTheme();
  const [globalStyles] = useGlobalStyles(theme);

  const handleChangeText = (value: string) => {
    helper.setTouched(true);
    helper.setValue(value);
  };

  return (
    <>
      <TextInput
        {...props}
        value={field.value}
        onChangeText={handleChangeText}
        error={meta.touched && Boolean(meta.error)}
      />
      {meta.error && meta.touched && (
        <Text style={globalStyles.formError}>
          {formatMessage({id: meta.error})}
        </Text>
      )}
    </>
  );
}
