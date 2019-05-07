import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Pokeball from '../pokeball.png';

class Home extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                });
            });
    };

    render() {
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div key={post.id} className="post card">
                        <img src={Pokeball} alt="pokeball"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                                <p className="black-text">{post.body}</p>
                            </Link>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className="center">No Posts Yet!</div>
        );
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        );
    }
}

export default Home;