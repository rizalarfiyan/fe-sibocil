import Form from './Form'
import { useFormField } from './Form.hook'
import FormControl from './FormControl'
import FormDescription from './FormDescription'
import FormField from './FormField'
import FormItem from './FormItem'
import FormLabel from './FormLabel'
import FormMessage from './FormMessage'

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
}

export default Object.assign(Form, {
  Control: FormControl,
  Description: FormDescription,
  Field: FormField,
  Item: FormItem,
  Label: FormLabel,
  Message: FormMessage,
})
