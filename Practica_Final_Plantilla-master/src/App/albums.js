import React from 'react';

class Albums extends React.Component {
    render() {
        return (
            <div className="card-columns">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title that wraps to a new line</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Albums;