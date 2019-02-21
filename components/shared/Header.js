import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
    render() {
        const title = this.props.title;
        return (
            <React.Fragment>
                <p>{ title }</p>
                {this.props.children}
                <p className='customClass'>I am a styled P element</p>
                <p className="customClassFromFile">I am styled from a file</p>
                <Link href="/">
                    <a>Home</a>
                </Link>

                <Link href="/about">
                    <a>About</a>
                </Link>

                <Link href="/portfolio">
                    <a>Portfolio</a>
                </Link>

                <Link href="/blog">
                    <a>Blog</a>
                </Link>

                <Link href="/cv">
                    <a>CV</a>
                </Link>
                <style jsx>
                    {
                        `
                            a {
                                font-size: 20px;
                            }
                            .customClass {
                                color: red;
                            }
                        `
                    }
                </style>
            </React.Fragment>
        );
    }
}

export default Header;