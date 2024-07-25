import Image from 'next/image';

const tools = [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Gitlab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
    { name: "Sketch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
    { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
    { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Debian", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" },
    { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" },
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    { name: "PowerShell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Putty", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg" },
    { name: "vim", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" },
    { name: "Anaconda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },
    { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    { name: "Google Colab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg" },
    { name: "Dbeaver", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg" },
    { name: "Markdown", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" },
]

export default function Tools() {
    return (
        <div className='flex flex-col items-center w-full'>
            <h3 className='my-4'>I am using everyday</h3>

            <ul className='flex flex-wrap gap-2'>
                {
                    tools.map((skill, index) => (
                        <li key={index}><span className='text-lg flex gap-2'><Image className='grayscale hover:filter-none' src={skill.icon} alt={skill.name} width={20} height={20} /></span></li>
                    ))
                }
            </ul>
        </div>
    )
}