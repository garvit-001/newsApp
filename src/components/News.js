import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 8,
  };

  PropTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 1,
    };
    document.title = `${this.props.category} - News Monkey`;
  }

  async componentDidMount() {
    // console.log("cdm");
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=bc8680fb10414482a02cbb84987a0ae6&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    this.setState({
      loading: true,
    });
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&country=${
      this.props.country
    }&apiKey=bc8680fb10414482a02cbb84987a0ae6&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handlePrevClick = async () => {
    console.log("prev");
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&country=${
      this.props.country
    }&apiKey=bc8680fb10414482a02cbb84987a0ae6&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&country=${
      this.props.country
    }&apiKey=bc8680fb10414482a02cbb84987a0ae6&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <div className="container my-4">
        <h1 style={{ color: "white", textAlign: "center" }}>
          Top {this.props.category} news
        </h1>
        {this.state.loading && <Spinner />}
        {/* {!this.state.loading && */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row m-4">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={
                      element.title != null ? element.title.slice(0, 45) : " "
                    }
                    description={
                      element.description != null
                        ? element.description.slice(0, 88)
                        : " "
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://images.hindustantimes.com/img/2022/12/23/1600x900/bosco_martis_jhoome_jo_pathaan_1671786427934_1671786428078_1671786428078.jpeg"
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "unknown"}
                    time={element.publishedAt ? element.publishedAt : "unknown"}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-light"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            prev
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            next
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
