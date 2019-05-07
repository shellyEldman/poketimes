import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        console.log(this.props);
        const {posts} = this.props;
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

export default connect(mapStateToProps)(Home);