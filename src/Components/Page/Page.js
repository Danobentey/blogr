import React from 'react'
import { FirstSection, SecondSection, ThirdSection } from './Page.styles'
import Editor from '../../Assets/images/illustration-editor-desktop.svg'
import Phones from '../../Assets/images/illustration-phones.svg'
import Laptop from '../../Assets/images/illustration-laptop-desktop.svg'


const Page = () => {
  return (
    <>
        <main>
            <FirstSection>
                <div>
                <h1>Designed for the future</h1>
                <h2>Introducing an extensible editor</h2>
                <p>
                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                change the looks of a blog.
                </p>
                <h2>Robust content management</h2>
                <p>
                Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                </p>
                </div>
                <img src={Editor} alt='Dashboard' />
            </FirstSection>

            <SecondSection>
                <img src={Phones} alt='Phones Illustration' />
                <div>
                    <h2>State of the Art Infrastructure</h2>
                    <p>
                        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                    </p>
                </div>
            </SecondSection>

            <ThirdSection>
                <img src={Laptop} alt='Laptop Illustration' />
                <div>
                    <h2>Free, open, simple</h2>
                    <p>
                        Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                        features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                        and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>
                    <h2>Powerful tooling</h2>
                    <p>
                        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                        capable of producing even the most complicated sites.
                    </p>
                </div>
            </ThirdSection>
        </main>
    </>
  )
}

export default Page