import { forwardRef, useImperativeHandle, useRef } from 'react';

const SliderItem = forwardRef((props, ref) => {
    const activeClass = props.isActive !== null && props.isActive ? 'active' : '';
    return (
        <div className={`slider-item ${activeClass}`} ref={ref}>
            <span className="icon-quote-start"></span>
            <p className="testimonial-text py-4">
                {props.description !== null ? props.description : 'N/A' }
            </p>
            <span className="icon-quote-end"></span>
            <div className="pt-4 text-center">
                <div className="testimonial-name mb-1">{props.name !== null ? props.name : 'N/A' }</div>
                <div className="testimonial-location fw-500">{props.location !== null ? props.location : 'N/A' } - {props.kapExperienceType !== null ? props.kapExperienceType : 'N/A' }</div>
            </div>
        </div>
    );
});

export default SliderItem;
