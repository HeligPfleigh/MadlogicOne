import React from 'react';
import {Checkbox} from 'react-native-paper';
import {useField} from 'formik';

interface ICheckboxFormik {
  name: string;
}

export default function CheckboxFormik(props: ICheckboxFormik) {
  const [field, , helper] = useField(props.name);

  const toggleCheckbox = () => helper.setValue(!field.value);

  return (
    <Checkbox.Android
      status={field.value ? 'checked' : 'unchecked'}
      onPress={toggleCheckbox}
    />
  );
}
