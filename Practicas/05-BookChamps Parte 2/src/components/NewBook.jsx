/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";


const NewBook = ({books}) => {
    const [title,setTitle] = useState("")
    const [autor,setAutor] = useState("")
    const [rating,setPuntaje] = useState(0)
    const [pages,setPaginas] = useState(0)
    const [imgUrl,setImgUrl] = useState("")

    function changeTitleHandler(e) {
        console.log(title)
        setTitle(e.target.value)
    }

    function changeAutorHandler(e) {
        console.log(autor)
        setAutor(e.target.value)
    }

    function changePuntajeHandler(e) {
        console.log(rating)
        setPuntaje(e.target.value)
    }

    function changePaginasHandler(e) {
        console.log(pages)
        setPaginas(e.target.value)
    }

    function changeImgUrlHandler(e) {
        console.log(imgUrl)
        setImgUrl(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        const newBook = {
            title,
            autor,
            rating: parseInt(rating,10),
            pages: parseInt(pages,10),
            imgUrl
        }

        setTitle("")
        setAutor("")
        setPuntaje("")
        setPaginas("")
        setImgUrl("")

    }

    return (
        <Card className="m-4" bg="success">
            <Card.Body>
                <Form className="text-white" onSubmit={submitHandler}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookTitle">
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    placeholder="Ingresar título"
                                    onChange={changeTitleHandler}
                                    value={title}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookAuthor">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar autor"
                                    required
                                    value={autor}
                                    onChange={changeAutorHandler}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookRating">
                                <Form.Label>Puntuación</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de estrellas"
                                    max={5}
                                    min={0}
                                    value={rating}
                                    onChange={changePuntajeHandler}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookPageCount">
                                <Form.Label>Cantidad de páginas</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de páginas"
                                    min={1}
                                    value={pages}
                                    onChange={changePaginasHandler}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Form.Group className="mb-3" controlId="bookImageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresar url de imagen"
                                value={imgUrl}
                                onChange={changeImgUrlHandler}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex justify-content-end">
                            <Button
                                variant="primary"
                                type="submit"
                            >
                                Agregar lectura
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default NewBook;