import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  name: {
    maxHeight: 30,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  description: {
    maxHeight: 40,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
}));

const BookList = ({ loading, error, books }) => {
  const classes = useStyles();
  if (loading) {
    return <p>LOADING...</p>;
  }
  if (error) {
    return <p>ERROR...</p>;
  }

  return (
    <div data-test='book-list' className={classes.root}>
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item xs={4} sm={4} key={book.id} className='book-item'>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='h2'
                    data-testid='title-item'
                    className='book-title'
                  >
                    {book.name}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    className={classes.description}
                  >
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  <Link to={`/books/${book.id}`}>View Details</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BookList;
