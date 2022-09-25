import React from 'react';

const Footer = () => {
    const header1 = [ 'link1', 'link2', 'link3', 'link4'];
    const header2 = [ 'link1', 'link2', 'link3', 'link4', 'link5'];
    const header3 = [ 'link1', 'link2', 'link3'];
    const header4 = [ 'link1', 'link2', 'link3', 'link4'];



    return (
        <div>
            <div className="footerDesktop">
                {/* Div is divided into 5 fractions in scss file */}
                <div className="footerDesktop__company">
                    <p className="header">
                        Company Name & Logo
                    </p>
                </div>
                {/* column1 */}
                <div className="footerDesktop__column">
                    <p className="sub-header">Header 1</p>
                    <ul className="footerDesktop__links">
                        {header1.map((link, index) => {
                            return (
                                <li key={index} className="footerDesktop__links-item">
                                    {link}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* column2 */}
                <div className="footerDesktop__column">
                    <p className="sub-header">Header 2</p>
                    <ul className="footerDesktop__links">
                        {header2.map((link, index) => {
                            return (
                                <li key={index} className="footerDesktop__links-item">
                                    {link}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* column3 */}
                <div className="footerDesktop__column">
                    <p className="sub-header">Header 3</p>
                    <ul className="footerDesktop__links">
                        {header3.map((link, index) => {
                            return (
                                <li key={index} className="footerDesktop__links-item">
                                    {link}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* column4 */}
                <div className="footerDesktop__column">
                    <p className="sub-header">Header 4</p>
                    <ul className="footerDesktop__links">
                        {header4.map((link, index) => {
                            return (
                                <li key={index} className="footerDesktop__links-item">
                                    {link}
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>

            <div className="footerMobile">
                <div className="accordions">
                    {/* column1 */}
                    <div className="accordion">
                    <input type="checkbox" id="first" />
                    <label for="first" className="sub-header acc-label">Header 1</label>
                    <div class="acc-content">
                        <ul className="footerDesktop__links">
                            {header1.map((link, index) => {
                                return (
                                    <li key={index} className="footerDesktop__links-item">
                                        {link}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    </div>

                    {/* column 2 */}
                    <div className="accordion">
                        <input type="checkbox" id="second" />
                        <label for="second" className="sub-header acc-label">Header 2</label>
                        <div className="acc-content">
                            <ul className="footerDesktop__links">
                                {header2.map((link, index) => {
                                    return (
                                        <li key={index} className="footerDesktop__links-item">
                                            {link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                     {/* column 3 */}
                     <div className="accordion">
                        <input type="checkbox" id="third" />
                        <label for="third" className="sub-header acc-label">Header 3</label>
                        <div className="acc-content">
                            <ul className="footerDesktop__links">
                                {header3.map((link, index) => {
                                    return (
                                        <li key={index} className="footerDesktop__links-item">
                                            {link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                     {/* column 4 */}
                     <div className="accordion">
                        <input type="checkbox" id="fourth" />
                        <label for="fourth" className="sub-header acc-label">Header 4</label>
                        <div className="acc-content">
                            <ul className="footerDesktop__links">
                                {header4.map((link, index) => {
                                    return (
                                        <li key={index} className="footerDesktop__links-item">
                                            {link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;