import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App'
import NotFound from './NotFound'


const Router = () =>(
    <BrowserRouter>
        {/* Switch testa ogni singola rotta */}
        <Switch>
            {/* Se esattamente il path risulta essere solo / visualizza il componente StorePicker */}
            <Route exact path="/" component={StorePicker} />
            {/* Se il path contiente /store/storeId visualizza il compotnete App */}
            <Route path="/store/:storeId" component={App}/>
            {/* Catch the Error */}
            {/* Se il path non contiente una delle due condizioni precedenti visualizza il componente NotFound */}
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router