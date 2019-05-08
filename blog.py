Python 3.6.4 (v3.6.4:d48eceb, Dec 19 2017, 06:54:40) [MSC v.1900 64 bit (AMD64)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> 
import web
>>> 
>>> urls = (
  "", "reblog",
  "/(.*)", "blog"
)
>>> class reblog:
    def GET(self): raise web.seeother('/')

    
>>> class blog:
    def GET(self, path):
        return "blog " + path

>>> app_blog = web.application(urls, locals())
>>> 
