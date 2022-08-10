import '../Component-Styling/Login.css'
import React, { UseState } from 'react'
import { Card, CardBody, Form, FormField, Box, Button, TextInput} from 'grommet';



export default function Login(){ 
    const [value, setValue] = React.useState({}); 
    return (  
    <Card>
        <CardBody pad="medium">
            <h2>Login</h2>
            <br></br>
        <Form
        value={value}
        onChange={nextValue => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => {}}
        > 
            <FormField name="username" htmlFor="text-input-id" label="Username">
                <TextInput id="text-input-id" name="username" />
            </FormField>
            <FormField name="password" htmlFor="text-input-id" label="Password">
                <TextInput id="text-input-id" name="lname" />
            </FormField>
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Login" background color='hoops'/>
                <Button type="reset" primary label="Clear" background color='hoops'/>
            </Box>
        </Form>
        </CardBody>
    </Card>
)};