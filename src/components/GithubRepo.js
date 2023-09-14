import React from "react";
import { octokit } from '../githubOctokit'
import parse from 'html-react-parser'
  
//<GithubRepo domain={siteData.domain} owner={siteData.githubowner} repo={siteData.githubrepo} onChange={handleChange} />
const GithubRepo = (props) => {
    const checkRepo = async () => { 
        await octokit.request(`GET /repos/${props.owner}/${props.domain}`, {
            owner: props.owner,
            repo: props.domain,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        .then((response) => {
            return response;
        })
        .then((result) => {
            return result;
        });
    }

    let html = "";
    if(props.repo) {
        html = `<input type='text' title='githubrepo' name='githubrepo' value=${props.repo} readOnly />`;
    } else {
        html = `<button onClick=${checkRepo()}>Click here to check if a repository exists with this domain as the name.</button>`;
    }
    return (
        <>
            {parse(html)}
        </>
    );
};
  
export default GithubRepo;