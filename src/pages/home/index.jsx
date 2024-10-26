import React from 'react';

export default class HomePage extends React.Component {

    render() {
        return (
            <div className="homepage">

                <h1>If it's handcrafted, vintage, custom, or unique, it's on Epsy.</h1>

                <div className="homepage-banner">
                    <h1>Personalized jewelry shines a little brighter</h1>
                    <button onClick={this.toHerGifts}>
                        Shop custom jewelry
                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </button>
                </div>

                <div className="middle-banner">
                    <ul className="middle-banner-list">
                        <li>
                            <h3>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Unique everything
                            </h3>
                            <p>We have millions of one-of-a-kind items, so you can find whatever you need
                                (or really, really want).</p>
                        </li>
                        <li>
                            <h3>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Independent sellers
                            </h3>
                            <p>Buy directly from someone who put their heart and soul into making something
                                special.</p>
                        </li>
                        <li>
                            <h3>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Secure shopping
                            </h3>
                            <p>We use best-in-class technology to protect your transactions.</p>
                        </li>
                    </ul>
                </div>

                <div className="bottom-banner">
                    <h3>You might be interested in</h3>
                    <ul className="category-images-ul">
                        <li onClick={this.toWeddingGifts}>
                            <div id="wedding-gifts"></div>
                            <h4>Wedding gifts</h4>
                        </li>
                        <li onClick={this.toHerGifts}>
                            <div id="her-gifts"></div>
                            <h4>Gifts for her</h4>
                        </li>
                        <li onClick={this.toHousewarming}>
                            <div id="housewarming"></div>
                            <h4>Housewarming gifts</h4>
                        </li>
                        <li onClick={this.toVintage}>
                            <div id="vintage-goodies"></div>
                            <h4>Vintage goodies</h4>
                        </li>
                        <li onClick={this.toArts}>
                            <div id="artsy-crafts"></div>
                            <h4>Artsy Crafts</h4>
                        </li>
                        <li onClick={this.toClothing}>
                            <div id="handmade-clothing"></div>
                            <h4>Handmade clothing</h4>
                        </li>
                        
                    </ul>

                </div>
            </div>
        )
    }
}