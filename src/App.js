import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './scss/main.css';  
import RepoRow from './RepoRow.js'    
import $ from 'jquery'

class App extends Component { 

  constructor(props) {
    super(props)
    this.state = {}
    // console.log("My initializer")

    // const repos = [
    //   {
    //     id: 0, 
    //     repo_fav: 9581,
    //     repo_fork: 593,
    //     repo_link: "https://github.com/bharathgs/Awesome-pytorch-list",
    //     title: "bharathgs / Awesome-pytorch-list",
    //     description: "A comprehensive list of pytorch related content on github,such as different models,implementations,helper libraries,tutorials etc."
    //   },
    //   {
    //     id: 1, 
    //     repo_fav: 2781,
    //     repo_fork: 631,
    //     repo_link: "https://github.com/leonardomso/33-js-concepts",
    //     title: "leonardomso / 33-js-concepts ",
    //     description: "33 concepts every JavaScript developer should know."
    //   },
    // ]

    // this.state = {rows: [
    //   <p key="1">A Row - 0</p>,
    //   <p key="2">A Row - 1</p>,
    //   <p key="3">A Row - 2</p>
    // ]}

    // let repoRows = []
    // repos.forEach((repo) => {
    //   console.log(repo.title)
    //   const repoRow = <RepoRow key={repo.id} repo={repo}/>
    //   repoRows.push(repoRow)
    // })

    // this.state = {rows: repoRows}

    this.performSearch("js")
  }

  performSearch(searchTerm) {
    console.log("Proceed with search GitHub search")
    const urlString = "https://api.github.com/search/repositories?q=" + searchTerm + "&sort=stars&order=desc";
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetch data successfully")
        console.log(searchResults)
        const results = searchResults.items
        // console.log(results[0])

        var repoRows = []

        results.forEach((repo) => {
          // repo.description = repo.description
          // console.log(repo.full_name)
          const repoRow = <RepoRow key={repo.id} repo={repo}/>
          repoRows.push(repoRow)
        }) 

        this.setState({rows: repoRows})
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data successfully")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
        <table className="headerBar">
          <tbody>
            <tr>
              <td>
                <img alt="App Brand Icon" width="60" src="img\brand\github-logo-light.svg" /> 
              </td>
              <td width="8"/>
              <td>
                <h3 className="headerTitle">GitHub Repo Search</h3>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          display: 'block',
          width: '100vw'
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Search here..." />
        
        {this.state.rows}
      </div>
    );
  }
}

export default App;
