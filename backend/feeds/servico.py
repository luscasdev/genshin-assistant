from flask import Flask, jsonify
import mysql.connector as mysql
import urllib.request

servico = Flask(__name__)

# informacoes sobre o servico
DESCRICAO = "serviço que gerencia os feeds de produto"
VERSAO = "0.0.1"
AUTOR = "lucas dias da silva"
EMAIL = "lucasdiasil@hotmail.com"

URL_TOTAL_DE_LIKES = "http://likes:5000/total_likes/"

MYSQL_SERVER = "bancodados"
MYSQL_USER = "root"
MYSQL_PASS = "admin"
MYSQL_DB = "Genshin"
TAMANHO_PAGINA = 16
ALIVE = "yes"

@servico.route("/is_alive", methods=["GET"])
def is_alive():
    return jsonify(alive = ALIVE)


@servico.route("/info", methods=["GET"])
def get_info():
    return jsonify(
        descricao=DESCRICAO,
        versao=VERSAO,
        autor=AUTOR,
        email=EMAIL
    )


def get_conexao_bd():
    conexao = mysql.connect(
        host=MYSQL_SERVER, user=MYSQL_USER, password=MYSQL_PASS, database=MYSQL_DB
    )

    return conexao

def acessar(url):
    resposta = urllib.request.urlopen(url)
    dados = resposta.read()

    return dados.decode("utf-8")


def gerar_feed(registro):
    feed = {
        "_id": registro["id"],
        "avatar_url": registro["avatar"],
    }

    return feed


@servico.route("/feeds")
def get_feeds():
    feeds = []

    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "SELECT id, title, type, subtitle, description, avatar, image_url " +
        "FROM personagem "
    )
    feeds = cursor.fetchall()
    conexao.close()
 
    return jsonify(feeds)


@servico.route("/feeds/<int:feed_id>")
def get_feed(feed_id):
    feeds = {}

    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "SELECT id, title, type, subtitle, description, avatar, image_url "  +
        "FROM personagem " +
        "WHERE id = " + str(feed_id)
    )
    feeds = cursor.fetchone()
    conexao.close()
    return jsonify(feeds)


@servico.route("/feeds/<int:feed_id>")
def get_personagem(feed_id):
    feeds = {}

    conexao = get_conexao_bd()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "SELECT id, nome, subtitulo, descricao, avatar " +
        "FROM personagem " +
        "WHERE id = " + str(feed_id)
    )
    feeds = cursor.fetchone()
    conexao.close()
    return jsonify(feeds)


if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=True
    )
