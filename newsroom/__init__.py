"""
Superdesk Newsroom
==================

:license: GPLv3
"""

import superdesk
from superdesk import register_resource  # noqa

__version__ = '1.14.0'

# reuse content api dbs
MONGO_PREFIX = 'CONTENTAPI_MONGO'
ELASTIC_PREFIX = 'CONTENTAPI_ELASTICSEARCH'


class Resource(superdesk.Resource):
    mongo_prefix = MONGO_PREFIX
    elastic_prefix = ELASTIC_PREFIX


class Service(superdesk.Service):
    pass


from newsroom.flaskapp import Newsroom  # noqa
