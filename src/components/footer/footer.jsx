import React from 'react';
import { Row, Col, Select } from 'antd';
import './Footer.css'

const footerStyle = {
    backgroundColor: '#0072CE',
    color: 'white',
    height: 'auto',
}

const titleStyle = {
    fontFamily: 'sans-serif',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginLeft: '1%',
}

const headingStyle = {
    fontSize: '20px',
    fontWeight: 'bold',

}

const countryStyle = {
    width : 200,
    position : 'relative',
    left : '5%',

}



function footer() {
    return (
        <>
            <div style={footerStyle}>
                <Row>
                    <Col span={24}>
                        <h1 style={titleStyle}>Play Station</h1> <hr />
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        <div className='footerContent'>
                            <h3 style={headingStyle}>About</h3>
                            <p><a href="#">About SIE</a></p>
                            <p><a href="#">Careers</a></p>
                            <p><a href="#">PlayStation Studios</a></p>
                            <p><a href="#">PlayStation Productions</a></p>
                            <p><a href="#">Corporate</a></p>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className='footerContent'>
                            <h3 style={headingStyle}>Products</h3>
                            <p><a href="#">PS5</a></p>
                            <p><a href="#">PS4</a></p>
                            <p><a href="#">PS VR2</a></p>
                            <p><a href="#">PS Plus</a></p>
                            <p><a href="#">Accesories</a></p>
                            <p><a href="#">Games</a></p>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className='footerContent'>
                            <h3 style={headingStyle}>Values</h3>
                            <p><a href="#">Environment</a></p>
                            <p><a href="#">Accessibility</a></p>
                            <p><a href="#">Online Safety</a></p>
                            <p><a href="#">Diversity, equity & inclusion</a></p>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className='footerContent'>
                            <h3 style={headingStyle}>Support</h3>
                            <p><a href="#">Support hub</a></p>
                            <p><a href="#">PlayStation Safety</a></p>
                            <p><a href="#">PSN Status</a></p>
                            <p><a href="#">PlayStation Repairs</a></p>
                            <p><a href="#">Password Reset</a></p>
                            <p><a href="#">Manuals</a></p>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className='footerContent'>
                            <h3 style={headingStyle}>Resources</h3>
                            <p><a href="#">PSN terms of service</a></p>
                            <p><a href="#">PS Store cancellation policy</a></p>
                            <p><a href="#">Age Ratings</a></p>
                            <p><a href="#">Health warning</a></p>
                            <p><a href="#">Developers</a></p>
                            <p><a href="#">Glossary</a></p>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className='footerContent'>
                            <h3 style={headingStyle}>Connect</h3>
                            <p><a href="#">Facebook Twitter Instagram Youtube</a></p>
                            <p><a href="#">iOS app</a></p>
                            <p><a href="#">Android APP</a></p>
                            <p><a href="#">Join our playtesting program</a></p>
                        </div>
                    </Col>
                </Row> <hr />

                <Row>
                    <Col span={24}>
                        <div>
                            <p style={{
                                fontSize: '1.7rem',
                                fontStyle: 'oblique',
                                position: 'relative',
                                left: '10%'

                            }}>Sony <br /> Interactive <br /> Entertainment</p>

                            <p style={{
                                fontSize: '1rem',
                                position: 'relative',
                                left: '5%',
                                fontStyle: 'oblique'



                            }}>© 2024 Sony Interactive Entertainment LLC <br />
                                All content, games titles, trade names and/or trade dress,
                                trademarks, artwork and associated imagery are trademarks
                                and/or copyright material of their respective owners.
                                All rights reserved. <a href="#" style={{
                                    color: 'white',
                                    textDecoration: 'underline',
                                    fontSize: '1.1rem',

                                }}>More info</a></p>
                        </div>
                    </Col>
                </Row> <hr />

                <Row>
                    <Col span={24}>
                        <div>
                            <p style={{
                                fontSize : '18px',
                            }}>Country</p>
                            <Select
                                showSearch
                                style={countryStyle}
                                placeholder="United States"
                                optionFilterProp='children'
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        value: '1',
                                        label: 'United Kingdom',
                                    },
                                    {
                                        value: '2',
                                        label: 'Saudia Arabia',
                                    },
                                    {
                                        value: '3',
                                        label: 'Honk Kong',
                                    },
                                    {
                                        value: '4',
                                        label: 'Germany',
                                    },
                                    {
                                        value: '5',
                                        label: 'France',
                                    },
                                    {
                                        value: '6',
                                        label: 'Pakistan',
                                    },
                                    {
                                        value: '7',
                                        label: 'United States',
                                    },
                                ]}
                            />
                        </div>
                    </Col>
                </Row>


            </div>

        </>
    )
}

export default footer