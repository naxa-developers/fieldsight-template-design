import React, {Component} from 'react';
class MousePointer extends Component {
    
    render(){
        const mouse = this.props.mouse;
        return(
            <React.Fragment>
                <div className="cursor" style={{ left: mouse.x, top: mouse.y }}>
                    <span></span>
                </div>
            </React.Fragment>
        )
    }
}
export default MousePointer
