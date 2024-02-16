import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Form.scss';
const Form = ({ title, description , inputPlaceholder, buttonLabel }) => {

    const emailRegex = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/i;
    const [inputEmail, setInputEmail] = useState('');
    const [isValidInputEmail, setIsValidInputEmail] = useState(null);
    const [isValidForm, setIsValidForm] = useState(null);
    const formRef = useRef(null);

    const isValidField = (value) => {
       const validator = new RegExp(emailRegex);
       return validator.test(value);
    }

    const onSubmitFormHandler = (e) => {
        e.preventDefault();
    }

    const inputEmailChangeHandler = (e) => {
        const inputVal = e.target.value;
        if(inputVal.trim().length === 0){
            setIsValidInputEmail(false);
            return;
        }

        setInputEmail(inputVal);
    };

    const onSubscribeButtonHandler = () => {
        
       if(!isValidField(inputEmail)){
            setIsValidInputEmail(false);
            return;
       }

       emailjs.sendForm(process.env.APP_EMAILJS_SERVICE_ID, process.env.APP_EMAILJS_TEMPLATE_ID, 
                            formRef.current, process.env.APP_EMAILJS_PUBLIC_KEY)
                            .then((response) => {
                                if(response.ok){
                                    setIsValidForm(true);
                                }
                            }, (error) => {
                                setIsValidForm(false);
                            });
    }

    const AlertMessage = () => {
        return (<div className='alert-sucess' >
                    <p>{ isValidForm ? 'You have been subscribed to our newsletter! You will receive a message in you inbox.' : 'There was a problem processing your request. Please try again later.' }</p>

                </div>)
    };

    return(
        <form ref={formRef} onSubmit={onSubmitFormHandler}>
            <h2>{title}</h2>
            <p className="mt-4 mb-2">{description}</p>
            <div className="input-control">
            <input type="text" className='' name='user_email' placeholder={inputPlaceholder} onChange={inputEmailChangeHandler} value={inputEmail} />
            { isValidInputEmail && <p>Invalid email address. Please verify your address</p> }
            <button type='button' className="button button-dark" onClick={onSubscribeButtonHandler}>{buttonLabel}</button>
            </div>
        </form>);
};

export default Form;
