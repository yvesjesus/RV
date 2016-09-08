var forma= new THREE.Geometry();

forma.vertices.push( new THREE.Vector3(  1, 0,  1)); //Se empujan los vértices en el arreglo
forma.vertices.push( new THREE.Vector3(  1, 0, -1));
forma.vertices.push( new THREE.Vector3( -1, 0, -1));
forma.vertices.push( new THREE.Vector3( -1, 0,  1));
forma.vertices.push( new THREE.Vector3(  0, 1,  0));

forma.faces.push( new THREE.Face3( 3, 2, 1)); //Cara 0
forma.faces.push( new THREE.Face3( 3, 1, 0)); //Cara 1
forma.faces.push( new THREE.Face3( 3, 0, 4)); //Cara 2
forma.faces.push( new THREE.Face3( 0, 1, 4)); //Cara 3
forma.faces.push( new THREE.Face3( 1, 2, 4)); //Cara 4
forma.faces.push( new THREE.Face3( 2, 3, 4)); //Cara 5

forma.computeBoundingSphere(); //Esfera de menor tamaña que acota al objeto;
forma.computeFaceNormals(); //Se computan las normales de las caras;

var material= new THREE.MeshNormalMaterial();
var malla= new THREE.Mesh( forma, material);
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z= 5;

var renderizador =new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara);
