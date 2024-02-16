import { forwardRef } from 'react';
import './Section.scss';

const Section = forwardRef((props, ref) => {
    const sectionClass = props.sectionClass !== null ? props.sectionClass : '';
    const containerClass = props.containerClass !== null ? props.containerClass : '';
    const rowClass = props.rowClass !== null ? props.rowClass : ''; 
    return(
        <section className={`${sectionClass}`} ref={ref}>
              <div className={`container ${containerClass}`}>
                    { props.title !== null && <h2>{props.title}</h2>}
                    <div className={`row ${rowClass}`}>
                        {props.children}
                    </div>
              </div>
        </section>
    )
});

export default Section;