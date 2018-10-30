import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import { Container } from 'reactstrap';

import kayzoonga from '../../views/kayzoonga/';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Full extends React.Component {
render() {
    return (
     
            <Container fluid>
              <Switch>
                <Route path="/kayzoonga" name="kayzoonga" component={kayzoonga} />
             
              </Switch>
            </Container>
          
    );
  }
}

export default Full;
