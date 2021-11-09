from flask import Flask, render_template, jsonify, request


app = Flask(__name__)

@app.route("/")
@app.route("/homepage")
def main():
    return render_template("index.html")


@app.route("/about", methods=["POST", "GET"])
def about():
    return render_template("about.html")  


@app.route("/feedback", methods=["POST", "GET"])
def feedback():
       
    if request.method == "POST":
        return 'Success', 200


    return render_template("feedback.html")


@app.route("/projects")
def slider():
    return render_template("slider.html")   

# @app.route('/summary')
# def summary():
#     data = make_summary()
#     response = app.response_class(
#         response=json.dumps(data),
#         status=200,
#         mimetype='application/json'
#     )
#     return response     


if __name__ == "__main__":
    app.run(debug=True)    