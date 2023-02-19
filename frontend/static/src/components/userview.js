import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './styles/userview.css'
import Navbar from 'react-bootstrap/Navbar'


function Userview() {

    return (
        <div>
      <header className='head'>hello</header>
      <Container className='container'>
      <Row>
        <Col className='col side-bar' sm={1}> 
        <div>side-bar</div>
        <div>
        <Image className='group-icon' src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80" />
        </div>
       </Col>
        <Col className='col room-nav' sm={3}>Room Nav</Col>
        <Col className="col main" sm={5}>Main Content
        <div className='message'>        
          message 1
        </div>
        <div className='message'>        
          message 2
        </div>
        <div className='message'>        
          message 3
        </div>
        <div className='enter-text'>        
          Enter Text here 
        </div>
        </Col>
        <Col className='col users-list' sm={3}>3 of 3
        <div className='user'>        
          user 1
        </div>
        <div className='user'>        
          user 2
        </div>
        <div className='user'>        
          user 3
        </div>
        </Col>
      </Row>
    </Container>
    <div className="fixed-bottom footer">        
                <Container>
                    hello
                </Container>
        </div>
    </div>
    )
}
export default Userview