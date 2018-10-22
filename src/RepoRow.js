import React from 'react'

class RepoRow extends React.Component {
    render() {
        return <table key={this.props.repo.id}>
        <tbody>
          <tr>
            <td>
              {/* Count: stars */}
              <div className="badgeWrap"> 
                <span className="badgeIcon">
                <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                </span>
                <p>{this.props.repo.stargazers_count}</p>
              </div>
              {/* Count: forks */}
              <div className="badgeWrap">
                <span className="badgeIcon">
                <svg aria-label="fork" className="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fillRule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                </span>
                <p>{this.props.repo.forks_count}</p>
              </div>
            </td>
            <td>
              <div className="repoTitle">  
                <h4><a href={this.props.repo.clone_url} target="_blank" rel="noopener noreferrer">{this.props.repo.full_name}</a></h4>
              </div>
              <div className="repoSum">
                <p>
                  <small>{this.props.repo.description}</small>
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default RepoRow