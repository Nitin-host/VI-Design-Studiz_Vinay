import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            properties: {
                name: '',
                email: '',
                subject: '',
                comments: '',
            }
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChange(e) {
        let name = e.target.name;
        let val = e.target.value;

        this.setState({
            properties: {
                ...this.state.properties,
                [name]: val
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        let { properties } = this.state;

        let body = `
            ${properties.comments}

            -Thanks and regards,
            ${properties.name},
            ${properties.email}.
        `;

        let qs = new URLSearchParams();
        qs.append('from', properties.email);
        qs.append('subject', properties.subject || 'Enquiry');
        qs.append('body', body)

        const linkElement = document.createElement('a');
        linkElement.href = `mailto:nitinravella0215@gmail.com?${qs.toString()}`;
        linkElement.click();
    }

    isEmpty(value) {
        return value === '' || value === undefined || ('' + value).trim().length === 0;
    }

    validateBtn() {
        let { properties } = this.state;
        let isValid = true;
        Object.keys(properties).forEach(property => {
            if (property !== 'subject' && this.isEmpty(properties[property])) {
                isValid = false
            }
        })
        return !isValid;
    }

    render() {
        const { properties } = this.state;
        return (
            <section className='contact-container'>
                <div className="contact-banner">
                    <div className="contact-banner-content container">
                        <div className='heading'>
                            {/* <h2 className='title-heading'>{CONTACT_DATA.bannerContent.title}</h2>
                            <p>{CONTACT_DATA.bannerContent.description}</p> */}
                        </div>
                    </div>
                </div>
                
                    <div className='container'>
                        <Row className="m-0" xs="1" md="2">
                            <Col>
                                <div className="card shadow rounded border-0 my-3">
                                    <div className="card-body py-5">
                                        <h4 className="card-title">Get In Touch !</h4>
                                        <div className="custom-form mt-3">
                                            <form method="post" name="myForm" id="myForm" onSubmit={this.handleSubmit.bind(this)}>
                                                <p id="error-msg" className="mb-0"></p>
                                                <div id="simple-msg"></div>
                                                <Row>
                                                    <Col xs="12" md="6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                                            <div className="form-icon position-relative">
                                                                <i className="fa fa-user icons"></i>
                                                                <input name="name" id="name" type="text" className="form-control ps-5" placeholder="Name :"
                                                                    onChange={this.handleChange.bind(this)} value={properties.name} />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs="12" md="6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                            <div className="form-icon position-relative">
                                                                <i className="fa fa-envelope icons"></i>
                                                                <input name="email" id="email" type="email" className="form-control ps-5" placeholder="Email :"
                                                                    onChange={this.handleChange.bind(this)} value={properties.email} />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs="12">
                                                        <div className="mb-3">
                                                            <label className="form-label">Subject</label>
                                                            <div className="form-icon position-relative">
                                                                <i className="fa fa-laptop icons"></i>
                                                                <input name="subject" id="subject" type="text" className="form-control ps-5" placeholder="subject :"
                                                                    onChange={this.handleChange.bind(this)} value={properties.subject} />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs="12">
                                                        <div className="mb-3">
                                                            <label className="form-label">Comments <span className="text-danger">*</span></label>
                                                            <div className="form-icon position-relative">
                                                                <i className="fa fa-comment icons clearfix"></i>
                                                                <textarea name="comments" id="comments" className="form-control ps-5" placeholder="Message :"
                                                                    value={properties.comments} rows="4" onChange={this.handleChange.bind(this)} ></textarea>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col>
                                                        <div className="d-grid">
                                                            <button className="btn btn-primary" disabled={this.validateBtn()}>Send Message</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                <div className='container section'>
                    <div>
                        <Row className="m-0 content-section" xs="1" md="2">
                            {/* {CONTACT_DATA.sectionOneCardsData.map((item, itemIdx) =>
                                <Col className="p-0 text-center" key={itemIdx}>
                                    <div>
                                        <h5 className="my-3 title-heading">{item.name}</h5>
                                        <p className="m-0">{item.addr_line1}</p>
                                        <p className="m-0">{item.addr_line2}</p>
                                        <p className="m-0">{item.addr_line3}</p>
                                        <p className="m-0">{item.addr_line4}</p>
                                    </div>
                                </Col>
                            )} */}
                        </Row>
                    </div>
                </div>
            </section>
        );
    }
}