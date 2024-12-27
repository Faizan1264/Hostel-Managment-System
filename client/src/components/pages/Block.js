import React, { Component } from 'react';
import './Block.css'
class Block extends Component {

    onBatchSelect(block) {
        this.props.history.push(`/room/${block}`);
    }
    render() {
        return (
            <div className="mid container">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">MM HALL</h5>
                            {/* <p onClick={() => this.onBatchSelect('A')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p> */}
                             <p onClick={() => this.onBatchSelect('MM HALL')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">SULAIMAN HALL</h5>
                            <p onClick={() => this.onBatchSelect('SULAIMAN HALL')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">HABIB HALL</h5>
                            <p onClick={() => this.onBatchSelect('HABIB HALL')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">VM HALL</h5>
                            <p onClick={() => this.onBatchSelect('VM HALL')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Block;