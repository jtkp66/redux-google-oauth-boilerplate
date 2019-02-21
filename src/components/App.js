import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostCreate from './posts/PostCreate';
import PostEdit from './posts/PostEdit';
import PostDelete from './posts/PostDelete';
import PostList from './posts/PostList';
import PostShow from './posts/PostShow';
import Header from './Header';


const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={PostList} />
                        <Route path="/posts/new" exact component={PostCreate} />
                        <Route path="/posts/edit/:id" exact component={PostEdit} />
                        <Route path="/posts/delete/:id" exact component={PostDelete} />
                        <Route path="/posts/:id" exact component={PostShow} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
