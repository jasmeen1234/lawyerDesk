import React from 'react';
import { Card, Col, Container, Row, Form } from 'react-bootstrap';
import { FaCheckCircle, FaSync, FaTimesCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faFilePdf, faFileWord, faTimes, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Page1() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Page2');
    };

    return (
        <div className="flex justify-center p-5 pl-44">
            <Container>
                <Row>
                    <Col xs={12} md={4} className="max-h-52 flex flex-col">
                        <Card className="flex-1">
                            <Card.Body className="overflow-y-auto">
                                <Card.Title className="text-blue-600 font-semibold"><b>Recent Studies</b></Card.Title>
                                <Card className="mb-3 rounded-lg">
                                    <Card.Body>
                                        <span className="text-blue-600 font-semibold"><b>"Dog Bite Complaint"</b></span>
                                        <div className="flex justify-between items-center">
                                            <div className="text-gray-800 text-sm font-light mt-2">2 days ago</div>
                                            <div className="flex items-center justify-end text-green-600 text-sm font-bold mt-2 ml-2">
                                                <FaCheckCircle className="mr-1" /> Completed
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-3 rounded-lg">
                                    <Card.Body>
                                        <span className="text-blue-600 font-semibold"><b>"The Cyberbullying Conspiracy"</b></span>
                                        <div className="flex justify-between items-center">
                                            <div className="text-gray-800 text-sm font-light mt-2">2 days ago</div>
                                            <div className="flex items-center justify-end text-green-600 text-sm font-bold mt-2 ml-2">
                                                <FaCheckCircle className="mr-1" /> Completed
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-3 rounded-lg">
                                    <Card.Body>
                                        <span className="text-blue-600 font-semibold"><b>"The Data Breach Dilemma"</b></span>
                                        <div className="flex justify-between items-center">
                                            <div className="text-gray-800 text-sm font-light mt-2">2 days ago</div>
                                            <div className="flex items-center justify-end text-green-600 text-sm font-bold mt-2 ml-2">
                                                <FaCheckCircle className="mr-1" /> Completed
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-3 rounded-lg">
                                    <Card.Body>
                                        <span className="text-blue-600 font-semibold"><b>"The Data Breach Dilemma"</b></span>
                                        <div className="flex justify-between items-center">
                                            <div className="text-gray-800 text-sm font-light mt-2">2 days ago</div>
                                            <div className="flex items-center justify-end text-orange-600 text-sm font-bold mt-2 ml-2">
                                                <FaSync className="mr-1" /> In Progress
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-3 rounded-lg">
                                    <Card.Body>
                                        <span className="text-blue-600 font-semibold"><b>"The Data Breach Dilemma"</b></span>
                                        <div className="flex justify-between items-center">
                                            <div className="text-gray-800 text-sm font-light mt-2">2 days ago</div>
                                            <div className="flex items-center justify-end text-red-600 text-sm font-bold mt-2 ml-2">
                                                <FaTimesCircle className="mr-1" /> Failed
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={8} md={8} className="max-h-52 flex flex-col">
                        <Card className="flex-1">
                            <Card.Body>
                                <Card.Title className="text-black font-semibold"><FontAwesomeIcon icon={faNewspaper} className="text-blue-600 text-2xl mr-2.5" /><b>Get Complete Info about any case from AI-driven research assistance</b></Card.Title>
                                <Card className="mt-3 rounded-lg">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" placeholder='Ex: Land dispute, Mumbai, Recent JudgeMent' rows={5} className="min-h-52" />
                                    </Form.Group>
                                </Card>
                                <Card bg="light" className="mt-3 text-center border-dotted border-2 border-gray-300 rounded-lg">
                                    <Card.Body>
                                        <div className="bg-light p-3 rounded-full mb-3">
                                            <FontAwesomeIcon icon={faFileUpload} className="text-gray-400 text-4xl" />
                                        </div>
                                        <p className="mb-0">Drag and Drop here Or click here to <a className='text-blue-600'><u>UploadFile</u></a></p>
                                        <h4 className='text-center mt-5 text-gray-500'>
                                            Maximum Uploads: 1
                                        </h4>
                                        <span className='text-gray-500 text-sm'>File format: JPG, PNG, docx, Pdf, etc.</span>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                            <div className="flex items-center justify-between bg-light p-3 rounded">
                                <div className="flex items-center">
                                    <h5 className="text-gray-500 mb-0 mr-3">Uploaded Files</h5>
                                    <span className="badge bg-info text-blue-600">3/5</span>
                                </div>
                            </div>
                            <div className="p-3 mb-5">
                                <Card bg="light" className="mt-1 p-2 text-start flex items-start justify-between min-h-8 relative">
                                    <div className="flex items-start">
                                        <FontAwesomeIcon icon={faFilePdf} className="text-red-600 text-2xl mr-2.5" />
                                        <b>Case Document.pdf</b>
                                    </div>
                                    <FontAwesomeIcon icon={faTimes} className="absolute top-1 right-1 cursor-pointer" />
                                </Card>
                                <Card bg="light" className="mt-3 p-2 text-start flex items-start justify-between min-h-8 relative">
                                    <div className="flex items-start">
                                        <FontAwesomeIcon icon={faFileWord} className="text-blue-600 text-2xl mr-2.5" />
                                        <b>Case Document.docx</b>
                                    </div>
                                    <FontAwesomeIcon icon={faTimes} className="absolute top-1 right-1 cursor-pointer" />
                                </Card>
                                <Card bg="light" className="mt-3 p-2 text-start flex items-start justify-between min-h-8 relative">
                                    <div className="flex items-start">
                                        <FontAwesomeIcon icon={faFileWord} className="text-blue-600 text-2xl mr-2.5" />
                                        <b>Case Document.docx</b>
                                    </div>
                                    <FontAwesomeIcon icon={faTimes} className="absolute top-1 right-1 cursor-pointer" />
                                </Card>
                            </div>
                            <div className="mb-4 flex justify-end items-center">
                                <button className="btn btn-lg bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-full px-14 py-1.5" onClick={handleClick}>Start</button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Page1;

