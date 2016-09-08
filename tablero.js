var cuboGris= new THREE.BoxGeometry(10,10,10);
var cuboMalla= new THREE.Mesh(cuboGris);

cuboMalla.translate(5,5,5);


var tablero= new THREE.Geometry();

tablero.merge(cuboMalla.geometry, cuboMalla.matrix);

cuboMalla.translate(25,25,25);
tablero.merge(cuboMalla.geometry, cuboMalla.matrix);


var material= new THREE.MeshNormalMaterial();

var tableroMalla= new THREE.Mesh(tablero, material);

var escena= new THREE.Scene();
escena.add(tableroMalla);

var camara= new THREE.PerspectiveCamera();
var centro = new THREE.Vector3( 5, 10, 5 );
//camara.lookAt(centro);
camara.position.z=300;
//camara.position.x=1000;
var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*0.95, window.innerHeight*0.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
