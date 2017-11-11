import GitHub from 'github-api';
const gh = new GitHub({
  username: 'goonilo',
  password: 'GoonismIsNotACult'
});
const repo = gh.getRepo('goonilo', 'commit_chat')

export const getAllCommits = async (branch) => {
  const options = {
    sha: branch
  };
  return (await repo.listCommits(options)).data;
}

export const getAllCommitMessages = async (branch) => {
  const commits = await getAllCommits(branch); 
  const commitMessages = commits.map((commitObject) => commitObject.commit.message);
  return commitMessages;
};

export const getAllBranches = async () =>
  (await repo.listBranches()).data; 

export const getBranch = async (branchName) => 
  (await repo.getBranch(branchName)).data;

const commit = async (branchName, message) => {
  const options = {
    shouldEncode: false
  };
  return await repo.writeFile(branchName, 'README.md', '', message, options);
};

export const sendChatMessage = async (channelName, message) => {
  return await commit(channelName, message);  
};

export const getMessagesFromChannel = async (channelName) => {
  return await getAllCommitMessages(channelName);
}
