import React from 'react';
import { Link } from 'react-router-dom';
import { IState } from '../../reducers';
import { ClickerState } from '../../reducers/clicker-reducer';
import { connect } from 'react-redux';

interface NavComponentProps {
    clicks: ClickerState
}

const NavComponent: React.FC<NavComponentProps> = ({clicks}) => {
    return (
        <section id="header-container">
            <nav>
                <ol>
                    <li><Link to="/clicks">Clicker</Link></li>
                    <li><Link to="/store">Store</Link></li>
                    <li><Link to="/pokemon">Pokemon</Link></li>
                </ol>
            </nav>
            <div id="clicks-counter">
                {clicks.clicks}ҫ
            </div>
        </section>
            
    )
}

const mapStateToProps = (state: IState) => ({
    clicks: state.clicks
});

export default connect(mapStateToProps)(NavComponent);