from flask import Flask, render_template

# Crea una instancia de la aplicación Flask
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

# Ejecuta la aplicación si el script se ejecuta directamente
if __name__ == '__main__':
    app.run(debug=True)