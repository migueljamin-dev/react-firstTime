import React, { Component } from 'react';
import {Card,CardBody,CardImg,CardTitle,CardText} from 'reactstrap';


class DishDetail extends Component {
    
 

    renderDish(dish){
      if(dish != null){
         return(
          
              <Card>
                   <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
         
            
          ); 
      }
      else{
          return (
              <div></div>
          );
      }
    }


    renderComment(dish){
        if(dish != null){
            return(
         
               <Card >
                {<h4>Comments</h4>}  
                <ul className="list-unstyled">
                    {dish.comments.map((c) => {
                          return (
                              <li key={c.id}>
                                 
                                <p> {c.comment}</p>
                                <p>-- {c.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</p>
                              </li>
                         );
                    }) }
                    </ul> 
              </Card>
      
            );
        }
        else{
            return(
              <div></div>
            );
        }
    }




    
  
    render() { 
        if(this.props.dish != null){
        return ( 
            <div className="container">
            <div className ="row">
                <div className="col-12 col-md-5 mt-1">
                {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 mt-1">
                {this.renderComment(this.props.dish)}
                </div>
            </div>
            </div>
         );
        }
        else{
            return(
                <div></div>
            )
        }
    }
}
 
export default DishDetail;