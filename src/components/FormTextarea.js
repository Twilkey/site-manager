import React, { forwardRef } from "react";
import { Input } from 'rsuite';

const FormTextarea = forwardRef((props, ref) => {
    return (
        <Input {...props} as="textarea" ref={ref} />
    );
});
  
export default FormTextarea;