import React, { Component } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
console.log("lo")
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'book' // Options: book | blog | course | none
    };

    this.setView = this.setView.bind(this);
  }

  setView(view) {
    this.setState({ view });
  }

  renderComponentUsingIfElse() {
    if (this.state.view === 'book') {
      return <BookDetails />;
    } else if (this.state.view === 'blog') {
      return <BlogDetails />;
    } else if (this.state.view === 'course') {
      return <CourseDetails />;
    } else {
      return <p>Please select a view.</p>;
    }
  }

  renderComponentUsingElementVariable() {
    let content;
    switch (this.state.view) {
      case 'book':
        content = <BookDetails />;
        break;
      case 'blog':
        content = <BlogDetails />;
        break;
      case 'course':
        content = <CourseDetails />;
        break;
      default:
        content = <p>No view selected.</p>;
    }
    return content;
  }

  renderComponentUsingTernary() {
    return (
      <>
        {this.state.view === 'book' ? <BookDetails /> :
         this.state.view === 'blog' ? <BlogDetails /> :
         this.state.view === 'course' ? <CourseDetails /> :
         <p>Nothing to show</p>}
      </>
    );
  }

  render() {
    return (
      <div>
        <h1>Blogger App</h1>
        <button onClick={() => this.setView('book')}>Show Book</button>
        <button onClick={() => this.setView('blog')}>Show Blog</button>
        <button onClick={() => this.setView('course')}>Show Course</button>
        <button onClick={() => this.setView('none')}>Clear</button>

        <hr />

        <h3>Using if-else</h3>
        {this.renderComponentUsingIfElse()}

        <h3>Using element variable</h3>
        {this.renderComponentUsingElementVariable()}

        <h3>Using ternary operator</h3>
        {this.renderComponentUsingTernary()}
      </div>
    );
  }
}

export default App;
