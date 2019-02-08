import { Component } from '@angular/core';
import * as shape from 'd3-shape';
import { element } from '@angular/core/src/render3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test2';
  nodeCount = 13;
  changeText=false;
  textValue = "";
  animations = false;
  icon = {
    close: "X",
  }
  orientation;
  hierarchialGraph = {
    nodes: [
      {
        id: 'start',
        label: 'start'
      }, {
        id: '1',
        label: 'Query ThreatConnect',
      }, {
        id: '2',
        label: 'Query XForce',
      }, {
        id: '3',
        label: 'Format Results'
      }, {
        id: '4',
        label: 'Search Splunk'
      }, {
        id: '5',
        label: 'Block LDAP'
      }, {
        id: '6',
        label: 'Email Results'
      } ,{
        id: '7',
        label: 'Query ThreatConnect',
      }, {
        id: '8',
        label: 'Query XForce',
      }, {
        id: '9',
        label: 'Format Results'
      }, {
        id: '10',
        label: 'Search Splunk'
      }, {
        id: '11',
        label: 'Block LDAP'
      }, {
        id: '12',
        label: 'Email Results'
      }
    ],
    links: [
      {
        source: 'start',
        target: '1',
        label: 'links to'
      }, {
        source: 'start',
        target: '2'
      }, {
        source: '1',
        target: '3',
        label: 'related to'
      }, {
        source: '2',
        target: '4'
      }, {
        source: '2',
        target: '6'
      },{
        source: '2',
        target: '7'
      },{
        source: '7',
        target: '8'
      },{
        source: '8',
        target: '9'
      },{
        source: '9',
        target: '10'
      },{
        source: '10',
        target: '11'
      },{
        source: '11',
        target: '12'
      }
      , {
        source: 'start',
        target: '5'
      }
    ]
  }

  curve: any = shape.curveLinear;
  autoZoom: boolean = false;
  panOnZoom: boolean = false;
  enableZoom: boolean = false;
  autoCenter: boolean = false;
  showLegend: boolean = false;
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  select(event) {
    console.log(event + "select")

    this.hierarchialGraph.nodes = [...this.hierarchialGraph.nodes, {
      id: '' + this.nodeCount,
      label: 'new Node' + this.nodeCount
    }];
    this.hierarchialGraph.links = [...this.hierarchialGraph.links, {
      source: '' + event,
      target: '' + this.nodeCount
    }];
    console.log(this.hierarchialGraph.links)
    this.nodeCount++;
    this.hierarchialGraph = this.hierarchialGraph;

  }
  onLegendLabelClick(event) {
    console.log("event");
    console.log(event)
  }
  onChange(event) {
    console.log(event)
    const tempId = event;

    const idArray = [tempId];
    for(var i =0 ; i< idArray.length ; i++){

    
      this.hierarchialGraph.links.forEach(element => {
        if (idArray[i] == element.source ) {
          idArray.push(element.target)
          console.log(element.source  + "  "+ element.target)
        }
      });
    }
    
    console.log(idArray)
    idArray.forEach(id => {
      var i = 0;
      var j= 0 ;
      this.hierarchialGraph.links.forEach(elements => {
        if (elements.target == id || elements.source == id) {
          this.hierarchialGraph.links.splice(i, 1);
        }
        i++;
      });
      this.hierarchialGraph.nodes.forEach(element => {
        if (element.id == id) {
          console.log(id)
          this.hierarchialGraph.nodes.splice(j, 1);

        }
        j++;
      }
      )
    })

    this.hierarchialGraph.nodes = [...this.hierarchialGraph.nodes];
    this.hierarchialGraph.links = [...this.hierarchialGraph.links];

    console.log(this.hierarchialGraph.nodes)
  }
 
}
