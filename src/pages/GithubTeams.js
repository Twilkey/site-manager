import React, { useEffect, useState, useRef } from 'react';
import { octokit } from '../githubOctokit'
import { useParams } from "react-router-dom";

const GithubTeams = (props) => {
    const routeParams = useParams();
    const [githubowner, setGithubOwner] = useState('');
    const [githubdata, setGithubData] = useState([]);
    const fetchingComplete = useRef(false);

	useEffect(() => {
        const owner = decodeURIComponent(routeParams.name);

        const getOrgMembers = async (slug) => {
			if(slug !== undefined) {
				let result = await octokit.request(`GET /orgs/${owner}/teams/${slug}/members`, {
					org: 'ORG',
					team_slug: 'TEAM_SLUG'
				})
				.then((response) => {
					return response;
				})
				.then((response) => {
					return response;
				});

				return result;
			}
        }
		
        const getOrgTeams = async () => {
			let result = await octokit.request(`GET /orgs/${owner}/teams`, {
				org: 'ORG'
			});

			if(result) {
				result.data.forEach((team, index) => {
					getOrgMembers(team.slug)
					.then((response) => {
						return response;
					})
					.then((response) => {
						setGithubData(githubdata => [...githubdata, {
							name: team.name,
							members: response.data
						}]);
					});
				});
			}
        }

        if(fetchingComplete.current === false){
			setGithubOwner(owner);
			getOrgTeams();
				
			fetchingComplete.current = true;
		}
	}, [routeParams.name, githubowner, githubdata]);
	
	return (
		<>
			<div className='page-title'>
				<h1>{githubowner} Github Teams</h1>
			</div>
			<div>
				{githubdata && githubdata.map((team, index) => (
					<div className='page-table' key={index}>
						<div className='page-table-head'>
							<div className='page-table-column page-table-label'>{team.name}</div>
						</div>
						{team.members &&
							<div className='page-table-grid-outter'>
								{team.members.map((member, index) => (
										<div className='page-table-grid-inner' key={index}>{member.login}</div>
								))}
							</div>
						}
					</div>
				))}
			</div>
		</>
	)
}

export default GithubTeams;