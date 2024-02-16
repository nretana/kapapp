import './ErrorMessage.scss';

const ErrorMessage = ({ title = 'Oops!', message = 'Something went wrong. Please try again later.' }) => {
    return(
        <div className="error-content">
            <div className='container h-100'>
                <div className='row h-100 align-items-center'>
                    <div className='col text-center px-5'>
                        <h1 className='display-0'>{title}</h1>
                        <p className='display-3 text-dark mt-5'>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ErrorMessage;