var React = require("react");

class ArtistSongs extends React.Component {
  render() {
    const square = {
      width: '250px',
      height: '250px',
      backgroundImage: 'url(https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      objectFit: 'cover'
    };
    const square2 = {
      width: '50px',
      height: '50px',
      backgroundImage: 'url(https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      objectFit: 'cover'
    };
    var artists = this.props.artists;
    artists = artists.map((element) => {
      return <div className="card text-center bg-light ml-0 mr-0">
        <img style={square} className="card-img-top mx-auto"
          src={`${element.photo_url}`} alt="Card image cap" />
        <div className="card-body">
          <h2 className="card-title text-dark">{element.name}</h2>
          <p className="card-text text-dark">Nationality: {element.nationality}</p>
          <a href={`/artists/${element.artistid}/edit`} className="btn btn-secondary">Edit Details</a>
          <br />
        </div>
      </div>
    })

    var songs = this.props.songs;
    songs = songs.map((element) => {
      return <li className="list-group-item list-group-item-action"><a key={element.title} href={`${element.preview_link}`} target="_blank">
        <img style={square2} src={`${element.artwork}`} className="float-left mr-3" />
        <h6 className = " text-dark"> {element.songid}. {element.title}</h6>
        <h7 className = " text-dark">Album: {element.album}</h7>
        </a>
        <a href={`songs/edit/${element.id}`} className="btn btn-warning float-right mr-3">Edit</a>
        <a href="" className="btn btn-success text-light  float-right mr-3">Add to Playlist</a>
        <br />
      </li>
      
    })
    if (songs.length == 0) {
      songs = [
        <li key="No songs" className="list-group-item list-group-item-action">
          <h6 className="text-center"> No songs in database</h6>
          <br />
        </li>

      ]
    }

    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>

        </head>
        <body className="bg-secondary">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/artists">Tunr Express</a>
          </nav>
          <div className="container-fluid">
            <h1 className="text-center w-75 ml-auto mr-auto bg-dark text-light"><em><u>Artists</u></em></h1>
            <div className="container w-75 ml-auto mr-auto pl-0 pr-0">
              {artists}
            </div>
            <ul className="list-group w-75 ml-auto mr-auto">
              <h4 className="text-center w-100 ml-auto mr-auto mb-0 bg-dark text-light pt-2 pb-2"><em>Songs</em></h4>
              <a key="add-new" href="songs/new"><li className="list-group-item list-group-item-action">
                <img style={square2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRybEoxX-zFDrhiWh8S9UB-ij1uf8jNp87KlIG-g04MYjtKvKMU&usqp=CAU" className="float-left mr-3" />
                <h6 className="pt-3 align-text-bottom">Add New Song</h6>
                
                <br />
              </li>
              </a>
              {songs}
            </ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = ArtistSongs;
