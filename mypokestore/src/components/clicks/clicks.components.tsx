import React from 'react';
import { IState } from '../../reducers';
import { addClicks } from '../../actions/clicker.component';
import { connect } from 'react-redux';

interface ClicksComponentProps {

    addClicks: (clicks: number) => any;
}

const ClicksComponent: React.FC<ClicksComponentProps> = ({addClicks}) => {
    return (
        <section id="clicker-container">
            <button 
                onClick={() => addClicks(1)}
                className="purchase-button">
                    Click For ҫ
            </button>
        </section>
    )
}

const mapStateToProps = (state: IState) => ({

});

const mapDispatchToProps = {
    addClicks: addClicks
}

export default connect(mapStateToProps, mapDispatchToProps)(ClicksComponent);