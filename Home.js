// Detecta si hay un usuario logueado
auth.onAuthStateChanged(async (user) => {
  const userInfo = document.getElementById("user-info");

  if (user) {
    // Buscar datos extra en Firestore
    const doc = await db.collection("users").doc(user.uid).get();

    if (doc.exists) {
      const data = doc.data();
      userInfo.textContent = `Hola, ${data.name} 👋`;
    } else {
      userInfo.textContent = `Bienvenido, ${user.email}`;
    }
  } else {
    // Si no hay usuario → volver al login
    window.location.href = "index.html";
  }
});

// Botón de logout
document.getElementById("logout-btn").addEventListener("click", async () => {
  await auth.signOut();
  window.location.href = "index.html"; // vuelve al login
});
