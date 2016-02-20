FROM gliderlabs/alpine:3.3
COPY app /srv/app
COPY views /srv/views
COPY index.js /srv/index.js
COPY dev.js /srv/dev.js
COPY package.json /srv/package.json
COPY webpack.config.js /srv/webpack.config.js
COPY .babelrc /srv/.babelrc
COPY LICENSE /srv/LICENSE
COPY README.md /srv/README.md
WORKDIR /srv
RUN apk --update add nodejs \
    && npm install \
    && node_modules/webpack/bin/webpack.js
EXPOSE 3005 3006
ENTRYPOINT ["npm", "run"]
CMD ["app"]
