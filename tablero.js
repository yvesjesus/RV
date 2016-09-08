var cuboGris= new THREE.BoxGeometry(10,10, 10);

var cuboMalla= new THREE.Mesh(cuboGris);

var tablero= new THREE.Geometry();

tablero.merge(cuboMalla.geometry, cuboMalla.matrix);
var material= new THREE.MeshNormalMaterial();

var tableroMalla= new THREE.Mesh(tablero, material);

var escena= new THREE.Scene();
escena.add(tableroMalla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=5;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*0.95, window.innerHeight*0.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
