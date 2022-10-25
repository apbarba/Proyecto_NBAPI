import Player from "src/app/Interfaces/jugadores.interface";

export interface EquiposResponse {
  _internal: Internal;
  league:    League;
}

export interface Internal {
  pubDateTime:             string;
  igorPath:                string;
  xslt:                    string;
  xsltForceRecompile:      string;
  xsltInCache:             string;
  xsltCompileTimeMillis:   string;
  xsltTransformTimeMillis: string;
  consolidatedDomKey:      string;
  endToEndTimeMillis:      string;
}

export interface League {
  standard:   Equipo[];
  africa:     Equipo[];
  sacramento: Equipo[];
  vegas:      Equipo[];
  utah:       Equipo[];
}

export interface Equipo {
  isNBAFranchise: boolean;
  isAllStar:      boolean;
  city:           string;
  altCityName:    string;
  fullName:       string;
  tricode:        string;
  teamId:         string;
  nickname:       string;
  urlName:        string;
  teamShortName:  string;
  confName:       ConfName;
  divName:        DivName;
}

export enum ConfName {
  California = "California",
  East = "East",
  Empty = "",
  Intl = "Intl",
  Summer = "summer",
  Utah = "Utah",
  West = "West",
}

export enum DivName {
  Atlantic = "Atlantic",
  Central = "Central",
  Empty = "",
  Northwest = "Northwest",
  Pacific = "Pacific",
  Southeast = "Southeast",
  Southwest = "Southwest",
}

export interface InfoEquipo{
  datosEquipo: Equipo;
  jugadoresEquipo: Player[];
}
