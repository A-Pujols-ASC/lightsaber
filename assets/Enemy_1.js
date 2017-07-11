function Enemy_1(camera){
	/* ENEMY_1 */
	var enemy_1Geometry = new THREE.CylinderGeometry(.7, .7, 6, 7);
	var enemy_1Material = new THREE.MeshBasicMaterial({color: "#545355"});
	enemy_1 = new THREE.Mesh(enemy_1Geometry, enemy_1Material);
	enemy_1.position.set(15, 6, camera.position.z / 2);
	return enemy_1;
}

module.exports = Enemy_1;